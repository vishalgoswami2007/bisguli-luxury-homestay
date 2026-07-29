import { useEffect, useState } from "react";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Droplets,
  RefreshCw,
  Sun,
  Wind,
} from "lucide-react";

const BISGULI_COORDINATES = {
  latitude: 29.389,
  longitude: 79.493,
};

function getWeatherDetails(code, isDay) {
  if (code === 0) {
    return {
      label: isDay ? "Clear Sky" : "Clear Night",
      Icon: Sun,
    };
  }

  if ([1, 2].includes(code)) {
    return {
      label: "Partly Cloudy",
      Icon: CloudSun,
    };
  }

  if (code === 3) {
    return {
      label: "Overcast",
      Icon: Cloud,
    };
  }

  if ([45, 48].includes(code)) {
    return {
      label: "Foggy",
      Icon: CloudFog,
    };
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return {
      label: "Light Drizzle",
      Icon: CloudRain,
    };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return {
      label: "Rainy",
      Icon: CloudRain,
    };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return {
      label: "Snowfall",
      Icon: CloudSnow,
    };
  }

  if ([95, 96, 99].includes(code)) {
    return {
      label: "Thunderstorm",
      Icon: CloudLightning,
    };
  }

  return {
    label: "Mountain Weather",
    Icon: CloudSun,
  };
}

function LiveWeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchWeather(showLoader = false) {
    try {
      if (showLoader) {
        setLoading(true);
      }

      setError("");

      const { latitude, longitude } = BISGULI_COORDINATES;

      const weatherURL =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m` +
        `&timezone=Asia%2FKolkata`;

      const response = await fetch(weatherURL);

      if (!response.ok) {
        throw new Error("Weather service unavailable");
      }

      const data = await response.json();

      if (!data.current) {
        throw new Error("Weather data not found");
      }

      setWeather({
        temperature: Math.round(data.current.temperature_2m),
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: Math.round(data.current.relative_humidity_2m),
        windSpeed: Math.round(data.current.wind_speed_10m),
        precipitation: data.current.precipitation,
        weatherCode: data.current.weather_code,
        isDay: Boolean(data.current.is_day),
        updatedAt: data.current.time,
      });
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError("Weather unavailable");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();

    const weatherInterval = setInterval(() => {
      fetchWeather();
    }, 15 * 60 * 1000);

    return () => clearInterval(weatherInterval);
  }, []);

  if (loading) {
    return (
      <div className="rounded-[30px] border border-white/10 bg-white/0.055 p-7 backdrop-blur-xl">
        <div className="flex min-h-260px items-center justify-center">
          <RefreshCw className="animate-spin text-[#F0A14A]" size={30} />
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="rounded-[30px] border border-white/10 bg-white/0.055 p-7 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F0A14A]">
          Bisguli Weather
        </p>

        <h3 className="mt-4 text-2xl font-bold text-white">
          Weather temporarily unavailable
        </h3>

        <button
          type="button"
          onClick={() => fetchWeather(true)}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F0A14A] px-5 py-3 font-semibold text-[#07140D]"
        >
          <RefreshCw size={18} />
          Try Again
        </button>
      </div>
    );
  }

  const { label, Icon } = getWeatherDetails(
    weather.weatherCode,
    weather.isDay
  );

  return (
    <div className="group relative overflow-hidden rounded-32px border border-white/10 bg-white/0.055 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F0A14A]/15 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F0A14A]">
              Live Weather
            </p>

            <h3 className="mt-3 text-xl font-bold text-white">
              Bisguli Village
            </h3>

            <p className="mt-1 text-sm text-white/50">
              Talli Sethi, Uttarakhand
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0A14A] text-[#07140D] shadow-lg shadow-[#F0A14A]/20">
            <Icon size={28} />
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-5">
          <div>
            <div className="flex items-start">
              <span className="text-6xl font-bold leading-none text-white">
                {weather.temperature}
              </span>

              <span className="mt-1 text-2xl font-semibold text-[#F0A14A]">
                °C
              </span>
            </div>

            <p className="mt-3 text-base font-medium text-white/80">
              {label}
            </p>

            <p className="mt-1 text-sm text-white/45">
              Feels like {weather.feelsLike}°C
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchWeather(true)}
            aria-label="Refresh weather"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:border-[#F0A14A]/40 hover:text-[#F0A14A]"
          >
            <RefreshCw size={17} />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
            <Droplets size={18} className="text-[#F0A14A]" />

            <p className="mt-3 text-lg font-bold text-white">
              {weather.humidity}%
            </p>

            <p className="mt-1 text-xs text-white/45">
              Humidity
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
            <Wind size={18} className="text-[#F0A14A]" />

            <p className="mt-3 text-lg font-bold text-white">
              {weather.windSpeed}
            </p>

            <p className="mt-1 text-xs text-white/45">
              km/h wind
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
            <CloudRain size={18} className="text-[#F0A14A]" />

            <p className="mt-3 text-lg font-bold text-white">
              {weather.precipitation}
            </p>

            <p className="mt-1 text-xs text-white/45">
              mm rain
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
          <p className="text-xs text-white/35">
            Automatically updated every 15 minutes
          </p>

          <span className="flex items-center gap-2 text-xs text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        </div>
      </div>
    </div>
  );
}

export default LiveWeatherCard;
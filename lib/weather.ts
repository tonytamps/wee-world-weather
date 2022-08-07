import {
    faCloud,
    faCloudBolt,
    faCloudMoon,
    faCloudMoonRain,
    faCloudRain,
    faCloudSun,
    faCloudSunRain,
    faIcicles,
    faMoon,
    faQuestion,
    faSmog,
    faSnowflake,
    faSun,
    faTemperatureArrowDown,
    faTemperatureArrowUp,
    faWind,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const dayNameFromDateString = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-CA", { weekday: "short" });
};

export const getForecast = async (locationKey: string) => {
    const forecastRes = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.ACCUWEATHER_API_KEY}&language=en-CA&metric=true`
    );

    if (!forecastRes.ok) {
        throw new Error("Error fetching forecast");
    }

    const accuweatherForecast: AccuweatherForecast = await forecastRes.json();

    return accuweatherForecast.DailyForecasts.map(({ Date, Temperature, Day }) => ({
        date: Date,
        day: dayNameFromDateString(Date),
        temp: Temperature.Maximum.Value,
        icon: Day.Icon,
        text: Day.IconPhrase,
    }));
};

export const iconForIconCode = (icon: number): IconDefinition => {
    switch (icon) {
        case 1:
            return faSun;
        case 2:
            return faCloudSun;
        case 3:
            return faCloudSun;
        case 4:
            return faCloudSun;
        case 5:
            return faCloudSun;
        case 6:
            return faCloud;
        case 7:
            return faCloud;
        case 8:
            return faCloud;
        case 11:
            return faSmog;
        case 12:
            return faCloudRain;
        case 13:
            return faCloudRain;
        case 14:
            return faCloudSunRain;
        case 15:
            return faCloudBolt;
        case 16:
            return faCloudBolt;
        case 17:
            return faCloudSunRain;
        case 18:
            return faCloudRain;
        case 19:
            return faWind;
        case 20:
            return faWind;
        case 21:
            return faWind;
        case 22:
            return faSnowflake;
        case 23:
            return faSnowflake;
        case 24:
            return faIcicles;
        case 25:
            return faIcicles;
        case 26:
            return faIcicles;
        case 29:
            return faSnowflake;
        case 30:
            return faTemperatureArrowUp;
        case 31:
            return faTemperatureArrowDown;
        case 32:
            return faWind;
        case 33:
            return faMoon;
        case 34:
            return faCloudMoon;
        case 35:
            return faCloudMoon;
        case 36:
            return faCloudMoon;
        case 37:
            return faCloudMoon;
        case 38:
            return faCloud;
        case 39:
            return faCloudMoonRain;
        case 40:
            return faCloudMoonRain;
        case 41:
            return faCloudBolt;
        case 42:
            return faCloudBolt;
        case 43:
            return faWind;
        case 44:
            return faSnowflake;
        default:
            return faQuestion;
    }
};

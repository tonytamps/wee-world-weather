type City = {
    id: string;
    name: string;
    path: string;
    locationKey: string;
};

type Forecast = {
    date: string;
    day: string;
    temp: number;
    icon: number;
    text: string;
};

interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

interface Minimum {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Maximum {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Temperature {
    Minimum: Minimum;
    Maximum: Maximum;
}

interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

interface DailyForecast {
    Date: string;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

interface AccuweatherForecast {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}

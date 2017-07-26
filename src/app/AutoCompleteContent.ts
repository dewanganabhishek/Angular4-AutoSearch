export interface AutoCompleteContent
{
    hits : Hits
}

export interface Hits{
hit:Hit[]
}

export interface Hit
{
    id : number;
    fields : Fields
}

export interface Fields
{
    "city_ar": string;
    "cityid": number,
    "city_en": string
}

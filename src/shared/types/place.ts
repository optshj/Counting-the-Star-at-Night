export type Place = {
    id: number;
    name: string;
    description: string;
    rating: number;
    lat: number;
    lng: number;
    category: 'Urban' | 'Nature' | 'Beach' | 'Observatory';
};

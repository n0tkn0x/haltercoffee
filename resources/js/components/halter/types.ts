export interface MenuItem {
    id: string;
    name: string;
    category: 'coffee' | 'pizza' | 'pasta' | 'non-coffee' | 'snacks';
    price: number;
    priceFormatted: string;
    tagline: string;
    description: string;
    image: string;
    badge?: string;
    flavorProfile?: {
        sweetness: number; // 1 - 5
        boldness: number;  // 1 - 5
        creaminess: number; // 1 - 5
    };
    ingredients?: string[];
    isSignature?: boolean;
}

export interface GalleryPhoto {
    id: string;
    url: string;
    caption: string;
    category: 'all' | 'semi-outdoor' | 'indoor' | 'moments';
    aspectRatio?: string;
}

export interface PizzaCustomization {
    size: 'regular' | 'large';
    crust: 'classic' | 'cheese-crust' | 'garlic-butter';
    spiciness: 'mild' | 'medium' | 'hot-volcano';
    extraCheese: boolean;
    extraBeefBacon: boolean;
    truffleOilDrizzle: boolean;
}

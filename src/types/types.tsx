export interface includeItems{
    quantity: number;
    item: string;
}
export interface ProductProps {
    _id: number;
    name: string | undefined;
    slug: string;
    category: string;
    new: boolean;
    price: number;
    image: {
        mobile: string | undefined;
        tablet: string | undefined;
        desktop: string | undefined;
    };
    description: string;
    features: string;
    includes: includeItems[];
    gallery: {
        first: {
        mobile: string;
        tablet: string;
        desktop: string;
        };
        second: {
        mobile: string;
        tablet: string;
        desktop: string;
        };
        third: {
        mobile: string;
        tablet: string;
        desktop: string;
        };
    };
    
}

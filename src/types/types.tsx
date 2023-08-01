export interface includeItems{
    quantity: number;
    item: string;
}
export interface ProductProps {
    _id: number;
    name: string;
    slug: string;
    category: string;
    new: boolean;
    price: number;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
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

export interface includeItems{
    quantity: number;
    item: string;
}
export interface othersImage{
    mobile: string;
    tablet: string;
    desktop: string;
}
export interface othersProps{
    name: string;
    slug: string;
    image: othersImage;
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
    others: othersProps[];
    
}
export interface ButtonProp {
    name: string;
}

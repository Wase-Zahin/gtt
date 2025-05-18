declare module '*.css';
declare module 'swiper/css';
declare module 'swiper/css/pagination';

declare module "*.module.css" {
    const content: Record<string, string>;
    export default content;
}
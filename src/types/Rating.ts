export type RatingRate = {
    totalRatings: number;
    averageRating: number;
    oneStarCount: number;
    twoStarCount: number;
    threeStarCount: number;
    fourStarCount: number;
    fiveStarCount: number;
}
export type Rating = {
    id: number;
    user: string;
    userAvatar: string;
    rating: number;
    message: string;
    time: Date;

}
export type RatingRequest = {
    userId: number;
    productId: number;
    rating: number;
    message: string
}
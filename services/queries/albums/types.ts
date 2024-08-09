export interface IAlbum {
    userId: number;
    id:     number;
    title:  string;
}


export interface IAlbumResponse {
	data: IAlbum[];
}

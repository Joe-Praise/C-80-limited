import { IAlbum } from "@/services/queries/albums/types";
import { IComment } from "@/services/queries/comments/types";
import { IPhoto } from "@/services/queries/photos/types";
import { IPost } from "@/services/queries/posts/types";
import { ITodo } from "@/services/queries/todos/types";
import { IUser } from "@/services/queries/users/types";
import { IPostCommentData, IUserPostCount, TopUserWithAlbumsAndPhotos } from "@/types";

export const getPostCommentData = (
	posts: IPost[],
	comments: IComment[]
): IPostCommentData[] => {
	const commentCounts = comments.reduce((acc, comment) => {
		acc[comment.postId] = (acc[comment.postId] || 0) + 1;
		return acc;
	}, {} as Record<number, number>);

	const postCommentData = posts.map((post) => ({
		postId: post.id,
		commentCount: commentCounts[post.id] || 0,
	}));

	return postCommentData;
};

export const getTopUsersByAlbumAndPhotoCount = (
	users: IUser[],
	albums: IAlbum[],
	photos: IPhoto[]
): TopUserWithAlbumsAndPhotos[] => {
	const photoCounts = photos.reduce((acc, photo) => {
		acc[photo.albumId] = (acc[photo.albumId] || 0) + 1;
		return acc;
	}, {} as Record<number, number>);

	const albumData = albums.map((album) => ({
		userId: album.userId,
		albumId: album.id,
		photoCount: photoCounts[album.id] || 0,
	}));

	const userAlbumPhotoCounts = albumData.reduce((acc, album) => {
		if (!acc[album.userId]) {
			acc[album.userId] = { albumCount: 0, photoCount: 0 };
		}
		acc[album.userId].albumCount += 1;
		acc[album.userId].photoCount += album.photoCount;
		return acc;
	}, {} as Record<number, { albumCount: number; photoCount: number }>);

	const userAlbumPhotoData = users.map((user) => ({
		userId: user.id,
		name: user.name,
		username: user.username,
		email: user.email,
		albumCount: userAlbumPhotoCounts[user.id]?.albumCount || 0,
		photoCount: userAlbumPhotoCounts[user.id]?.photoCount || 0,
	}));

	userAlbumPhotoData.sort((a, b) => {
		if (b.albumCount === a.albumCount) {
			return b.photoCount - a.photoCount;
		}
		return b.albumCount - a.albumCount;
	});

	return userAlbumPhotoData.slice(0, 4);
};

export const calculateTodosStatus = (todos: ITodo[]) => {
	const completedTaskCount = todos.reduce((acc, todo) => {
		if (todo.completed === false) acc++;
		return acc;
	}, 0);

	const total_todo_count = todos.length;
	const incomplete = total_todo_count - completedTaskCount;

	const completion_percentage = Math.floor(
		(completedTaskCount / total_todo_count) * 100
	);

	return {
		incomplete,
		completedTaskCount,
		completion_percentage,
	};
};

export const getUserPostInsight = (
	users: IUser[],
	posts: IPost[]
): IUserPostCount[] => {
	const postCounts = posts.reduce((acc, post) => {
		acc[post.userId] = (acc[post.userId] || 0) + 1;
		return acc;
	}, {} as Record<number, number>);

	const userPostCounts = users.map((user) => ({
		user: user.username,
		total_posts: postCounts[user.id] || 0,
	}));

	return userPostCounts;
};
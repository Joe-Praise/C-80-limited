/* eslint-disable no-unused-vars */

import { IPost } from '@/services/queries/posts/types';
import { ITodo } from '@/services/queries/todos/types';
import { IUser } from '@/services/queries/users/types';
import { Dispatch, ElementType, ReactNode } from 'react';

declare type BentoWrapperProps = {
	children: ReactNode;
	element: ElementType;
	className?: string;
};

declare type SvgProps = {
	className?: string;
	fill?: string;
};

declare type SummaryCardDetails = {
	id: string;
	icon: React.JSX.Element;
	total: string;
	label: string;
};

declare type TableHeader = {
	id: string;
	label: string;
};

declare type LineChartProps = {
	wrapperClassName?: string;
	lineClassName?: string;
	calc: string;
	wrapperColor: string;
	lineColor: string;
};

declare type WelcomeProps = {
	totalPosts: number;
	totalComments: number;
	totalAlbums: number;
	totalPhotos: number;
};

declare type PostCommentVolumeType = {
	postId: string;
	postCount: number;
	commentCount: number;
}[];

declare type IPostCommentData = {
	postId: number;
	commentCount: number;
};

declare type StackedBarChartProps = {
	posts: IPost[];
	comments: IComment[];
};

declare type TopUserWithAlbumsAndPhotos = {
	userId: number;
	name: string;
	username: string;
	email: string;
	albumCount: number;
	photoCount: number;
};

declare type TopUsersByAlbumProps = {
	users: IUser[];
	albums: IAlbum[];
	photos: IPhoto[];
};

declare type TodoProps = {
	todos: ITodo[];
};

declare type IUserPostCount = {
	user: string;
	total_posts: number;
};

declare type IPostInsightProps = {
	users: IUser[];
	posts: IPost[];
};

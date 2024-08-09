'use client';
import {
	Header,
	PostCommentVolume,
	PostInsight,
	Todo,
	TopUsersByAlbum,
	Welcome,
} from '@/components/dashboard';
import album_queries from '@/services/queries/albums';
import comment_queries from '@/services/queries/comments';
import photo_queries from '@/services/queries/photos';
import post_queries from '@/services/queries/posts';
import todo_queries from '@/services/queries/todos';
import user_queries from '@/services/queries/users';
import { Loader } from 'lucide-react';

export default function Home() {
	const {
		data: users,
		isLoading: user_loading,
		error: user_error,
	} = user_queries.read();
	const {
		data: posts,
		isLoading: post_loading,
		error: post_error,
	} = post_queries.read();
	const {
		data: comments,
		isLoading: comment_loading,
		error: comment_error,
	} = comment_queries.read();
	const {
		data: albums,
		isLoading: albums_loading,
		error: albums_error,
	} = album_queries.read();
	const {
		data: photos,
		isLoading: photos_loading,
		error: photos_error,
	} = photo_queries.read();
	const {
		data: todos,
		isLoading: todos_loading,
		error: todos_error,
	} = todo_queries.read();

	if (
		user_loading ||
		post_loading ||
		comment_loading ||
		albums_loading ||
		photos_loading ||
		todos_loading
	)
		return (
			<div className='text-theme flex justify-center items-center h-screen'>
				<p className='animate-spin'>
					<Loader />
				</p>
			</div>
		);
	if (
		user_error ||
		post_error ||
		comment_error ||
		albums_error ||
		photos_error ||
		todos_error
	)
		return <div>Something went wrong!</div>;

	return (
		<div className='pt-[17px]'>
			<Header />
			<div className='flex justify-between mt-[23px] lg:h-[201px]'>
				<Welcome
					totalPosts={posts.length}
					totalComments={comments.length}
					totalAlbums={albums.length}
					totalPhotos={photos.length}
				/>
				<PostCommentVolume posts={posts} comments={comments} />
			</div>
			<TopUsersByAlbum users={users} albums={albums} photos={photos} />
			<div className='flex justify-between mt-[14px] lg:h-[201px]'>
				<Todo todos={todos} />
				<PostInsight users={users} posts={posts} />
			</div>
		</div>
	);
}

import {
	Header,
	PostCommentVolume,
	PostInsight,
	Todo,
	TopUsersByAlbum,
	Welcome,
} from '@/components/dashboard';

export default function Home() {
	return (
		<div className='pt-[17px]'>
			<Header />
			<div className='flex justify-between mt-[23px] lg:h-[201px]'>
				<Welcome />
				<PostCommentVolume />
			</div>
			<TopUsersByAlbum />
			<div className='flex justify-between mt-[14px] lg:h-[201px]'>
				<Todo />
				<PostInsight/>
			</div>
		</div>
	);
}

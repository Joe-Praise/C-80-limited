import axios from '@/lib/axios';
import { IResponseInterface } from '@/services';
import { errorToast } from '@/services/helpers';
import keys from './keys';
import { useQuery } from '@tanstack/react-query';
import { IPostResponse } from './types';

const route = '/posts';

const readFn = async () => {
	try {
		const response = await axios.get<IResponseInterface>(route);
		return response;
	} catch (error) {
		return errorToast('something went wrong!');
	}
};

const useReadPosts = () => {
	const hash = [keys.read, 'posts'];

	const response = useQuery({
		queryKey: hash,
		queryFn: () => readFn(),
	});

	return {
		...response,
		data: (response.data || []) as IPostResponse['data'],
	};
};

const post_queries = { read: useReadPosts };
export default post_queries;

import axios from '@/lib/axios';
import { IResponseInterface } from '@/services';
import { errorToast } from '@/services/helpers';
import keys from './keys';
import { useQuery } from '@tanstack/react-query';
import { ICommentResponse } from './types';

const route = '/comments';

const readFn = async () => {
	try {
		const response = await axios.get<IResponseInterface>(route);
		return response;
	} catch (error) {
		return errorToast('something went wrong!');
	}
};

const useReadComments = () => {
	const hash = [keys.read, 'comments'];

	const response = useQuery({
		queryKey: hash,
		queryFn: () => readFn(),
	});

	return {
		...response,
		data: (response.data || []) as ICommentResponse['data'],
	};
};

const comment_queries = { read: useReadComments };
export default comment_queries;

import axios from '@/lib/axios';
import { IResponseInterface } from '@/services';
import { errorToast } from '@/services/helpers';
import keys from './keys';
import { useQuery } from '@tanstack/react-query';
import { IUserResponse } from './types';

const route = '/users';

const readFn = async () => {
	try {
		const response = await axios.get<IResponseInterface>(route);
		return response;
	} catch (error) {
		return errorToast('something went wrong!');
	}
};

const useReadUsers = () => {
	const hash = [keys.read, 'users'];

	const response = useQuery({
		queryKey: hash,
		queryFn: () => readFn(),
	});

	return {
		...response,
		data: (response.data || []) as IUserResponse['data'],
	};
};

const user_queries = { read: useReadUsers };
export default user_queries;

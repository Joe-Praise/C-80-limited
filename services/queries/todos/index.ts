import axios from '@/lib/axios';
import { IResponseInterface } from '@/services';
import { errorToast } from '@/services/helpers';
import keys from './keys';
import { useQuery } from '@tanstack/react-query';
import { ITodoResponse } from './types';

const route = '/todos';

const readFn = async () => {
	try {
		const response = await axios.get<IResponseInterface>(route);
		return response;
	} catch (error) {
		return errorToast('something went wrong!');
	}
};

const useReadTodos = () => {
	const hash = [keys.read, 'todos'];

	const response = useQuery({
		queryKey: hash,
		queryFn: () => readFn(),
	});

	return {
		...response,
		data: (response.data || []) as ITodoResponse['data'],
	};
};

const todo_queries = { read: useReadTodos };
export default todo_queries;

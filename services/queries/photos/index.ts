import axios from '@/lib/axios';
import { IResponseInterface } from '@/services';
import { errorToast } from '@/services/helpers';
import keys from './keys';
import { useQuery } from '@tanstack/react-query';
import { IPhotoResponse } from './types';

const route = '/photos';

const readFn = async () => {
	try {
		const response = await axios.get<IResponseInterface>(route);
		return response;
	} catch (error) {
		return errorToast('something went wrong!');
	}
};

const useReadPhotos = () => {
	const hash = [keys.read, 'photos'];

	const response = useQuery({
		queryKey: hash,
		queryFn: () => readFn(),
	});

	return {
		...response,
		data: (response.data || []) as IPhotoResponse['data'],
	};
};

const photo_queries = { read: useReadPhotos };
export default photo_queries;

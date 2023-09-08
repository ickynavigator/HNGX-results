import { Center, Loader } from '@mantine/core';
import CustomError from '~/components/Error';
import CustomTable from '~/components/Table';
import { api } from '~/utils/api';

const Page = () => {
  const stage1 = api.stages.stage1GetFailed.useQuery();

  if (stage1.isLoading) {
    return (
      <Center h="100%">
        <Loader />
      </Center>
    );
  }
  if (stage1.isError) {
    return (
      <Center h="100%">
        <CustomError message={stage1.error.message} />
      </Center>
    );
  }

  return (
    <>
      <CustomTable
        headers={['username', 'grade']}
        data={stage1.data}
        showActionsRow
      >
        {users => {
          return users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.grade}</td>
            </tr>
          ));
        }}
      </CustomTable>
    </>
  );
};

export default Page;

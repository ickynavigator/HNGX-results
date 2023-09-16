import { Center, Loader } from '@mantine/core';
import CustomError from '~/components/Error';
import CustomTable from '~/components/Table';
import { api } from '~/utils/api';

const Page = () => {
  const stage = api.stages.stage2GetPassed.useQuery();

  if (stage.isLoading) {
    return (
      <Center h="100%">
        <Loader />
      </Center>
    );
  }
  if (stage.isError) {
    return (
      <Center h="100%">
        <CustomError message={stage.error.message} />
      </Center>
    );
  }

  return (
    <>
      <CustomTable headers={['username', 'grade']} data={stage.data}>
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

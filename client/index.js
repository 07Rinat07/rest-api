const baseUrl = 'http://localhost:3000';

const path = {
    employee: '/employees',
    comments: '/comments',
}
// [{key: 'role', value: 'manager'}];
const generateQueryString = (queryParams = []) => queryParams.length
? `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}`: '';
const getEmployees = async (queryParams) => {
    const response = await fetch(`${baseUrl}${path.employee}${generateQueryString(queryParams)}`);
    const data = await response.json();

    console.log(data);
};
getEmployees([{key: 'role', value: 'manager'}, {key: 'active', value: true}]);
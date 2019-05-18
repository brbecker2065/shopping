import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const sellerMapper = row => ({
    userHandle: row.user_handle,
    username: row.username,
    firstName: row.first_name,
    middleName: row.middle_name,
    lastName: row.last_name,
    suffix: row.suffix,
    email: row.email,
    joinedDate: row.joined_date
});

export async function fetchUserByEmail(email) {
    const query = sql`select * from sellers where email = ${email};`;
    return (await PGWrapper.sqlAndMap(query, sellerMapper))[0];
}
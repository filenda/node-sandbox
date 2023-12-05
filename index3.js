const queryString = 'SELECT "public"."Shift"."id", "public"."Shift"."start", "public"."Shift"."end", "public"."Shift"."profession", "public"."Shift"."is_deleted", "public"."Shift"."facility_id", "public"."Shift"."worker_id" FROM "public"."Shift" WHERE ("public"."Shift"."start" >= $1 AND "public"."Shift"."end" <= $2 AND "public"."Shift"."is_deleted" = $3 AND "public"."Shift"."worker_id" = $4) OFFSET $5';

const valuesArray = ["2023-03-01 00:00:00 UTC", "2023-03-02 00:00:00 UTC", false, 101, 0];

// Function to replace placeholders in the string
function replaceParams(query, values) {
  return query.replace(/\$\d+/g, match => {
    const index = parseInt(match.slice(1)) - 1;
    return values[index];
  });
}

const replacedString = replaceParams(queryString, valuesArray);
console.log(replacedString);
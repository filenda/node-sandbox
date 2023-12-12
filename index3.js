const queryString = 'SELECT "public"."Shift"."id", "public"."Shift"."start", "public"."Shift"."end", "public"."Shift"."profession", "public"."Shift"."is_deleted", "public"."Shift"."facility_id", "public"."Shift"."worker_id" FROM "public"."Shift" WHERE ("public"."Shift"."start" >= $1 AND "public"."Shift"."end" <= $2 AND "public"."Shift"."is_deleted" = $3 AND "public"."Shift"."worker_id" IS NULL AND "public"."Shift"."profession" = $4 AND ("public"."Shift"."id") IN (SELECT "t0"."id" FROM "public"."Shift" AS "t0" INNER JOIN "public"."Facility" AS "j0" ON ("j0"."id") = ("t0"."facility_id") WHERE ("j0"."is_active" = $5 AND ("j0"."id") NOT IN (SELECT "t1"."id" FROM "public"."Facility" AS "t1" INNER JOIN "public"."FacilityRequirement" AS "j1" ON ("j1"."facility_id") = ("t1"."id") WHERE ((NOT ("j1"."id") IN (SELECT "t2"."id" FROM "public"."FacilityRequirement" AS "t2" INNER JOIN "public"."Document" AS "j2" ON ("j2"."id") = ("t2"."document_id") WHERE ("j2"."id" IN ($6,$7,$8,$9,$10,$11,$12,$13,$14,$15) AND "t2"."id" IS NOT NULL))) AND "t1"."id" IS NOT NULL)) AND "t0"."id" IS NOT NULL))) ORDER BY "public"."Shift"."id" ASC LIMIT $16 OFFSET $17';

const valuesArray = ["2023-02-20 00:00:00 UTC", "2023-03-03 00:00:00 UTC", false, "CNA", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 0];

// Function to replace placeholders in the string
function replaceParams(query, values) {
  return query.replace(/\$\d+/g, match => {
    const index = parseInt(match.slice(1)) - 1;
    const value = values[index];

    // Check if the value is a string and wrap it in double quotes
    return typeof value === 'string' ? `'${value}'` : value;
  });
}

const replacedString = replaceParams(queryString, valuesArray);
console.log(replacedString);

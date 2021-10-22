import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";
import { Bookmarks } from "../tables/bookmarks-table.ts";
import { moment } from "moment";

export const BookmarkList = DefineFunction(
  "bookmarklist",
  {
    title: "Bookmark List",
    description: "Lists all the added bookmarks for the User",
    input_parameters: {
      user_id: {
        type: Schema.slack.types.user_id,
        description: "The requester user id",
      },
    },
    output_parameters: {
      user_private_message: {
        type: Schema.types.string,
        description: "The bookmarks list",
      },
    },
  },
  async ({ inputs, client }) => {
    console.log(`listing all the bookmarks for ${inputs.user_id}`);

    //shorthand for referencing the bookmarks table
    const bookmarksTable = Bookmarks.api(client);

    //add the request
    const result = await bookmarksTable.query({
      expression: "#created = :today",
      expression_columns: { "#created": "created" },
      expression_values: { ":today": moment().startOf("day").utc().format() },
    });
    console.log(`bookmarks listed ${JSON.stringify(result)}`);
    const sucessMessage = result;

    return await {
      outputs: { user_private_message: sucessMessage },
    };
  },
);

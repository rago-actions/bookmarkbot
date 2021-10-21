import { DefineTable, Schema } from "slack-cloud-sdk/mod";

// Here's a sample Table definition :)
// To include this in your project, you'll want to add it in your project.ts like so:
/**
 * // Import it into project.ts
 * import { DinosTable } from "./tables/dinos.ts";
 *
 * // Register it in the Project() call alongside your other configuration
 * Project({
 *   ...
 *   tables: [DinosTable],
 * });
 */
export const Bookmarks = DefineTable("bookmarks", {
  primary_key: "bookmark_id",
  columns: {
    bookmark_id: {
      type: Schema.types.string,
    },
    bookmark_name: {
      type: Schema.types.string,
    },
    bookmark_url: {
      type: Schema.types.string,
    },
    user_id: {
      type: Schema.types.user_id,
    },
  },
});

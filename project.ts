import { Project } from "slack-cloud-sdk/mod";
import { BookmarkList } from "./functions/bookmarklist";
import { BookmarkAdd } from "./functions/bookmarkadd";
import { BookmarkWorkflow } from "./workflows/bookmarkadd-workflow";
import { BookmarkSlashCmd } from "./triggers/bookmark_slash_command";
import { Bookmarks } from "./tables/bookmarks-table";

Project({
  name: "BookmarkBot",
  description: "An app to list/add/update/delete bookmarks",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "chat:users.list",
    "chat:conevrsations.list",
  ],
  functions: [BookmarkList, BookmarkAdd],
  workflows: [BookmarkWorkflow],
  triggers: [BookmarkSlashCmd],
  tables: [Bookmarks],
  outgoingDomains: [],
});

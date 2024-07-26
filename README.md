# Discord Bot Template
Skeleton for a modular Discord bot built using TypeScript. It provides a clean structure with interfaces and APIs for commands, data storage, and visual functions like creating embeds.

### Getting Started 
##### Prerequisites

* Node.js
* npm


##### Installation

Clone the Repository

```bash
git clone https://github.com/jakecarr/discord-bot-template.git
cd discord-bot-template
npm install
```

##### Set Up Environment Variables

Create a .env file in the root directory and add your Discord bot token:

Optionally edit src/config.ts to update the bot command prefix. The default is '!'.

##### Running the Bot
To run the bot locally, use:

```bash

npx ts-node src/bot.ts
```

The bot should log "Bot is online!" and be ready to accept commands.


#####  Project Structure
The project structure is organized as follows:

```bash
discord-bot-starter-kit/
├── src/
│   ├── commands/       # Command handlers
│   ├── data/           # Database entities and connection
│   ├── ui/             # Visual functions (e.g., embeds)
│   ├── bot.ts          # Main bot file
│   └── config.ts       # Configuration file
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and dependencies
├── .env                # Environment variables
└── README.md           # Project documentation
```

##### Developing Commands
###### Adding a New Command
1. Create a Command File
2. Create a new file in the src/commands directory with the same name as the command, for example, hello.ts for a !hello command. 
3. Make the default export from the command file a function which takes a discord Message object and an array of string args.
4. No need to update the command handler each time you add a command. The bot dynamically imports commands based on the file name.

```typescript
// Adding a command
import { Message } from 'discord.js';

export default (message: Message, args: string[]) => {
  message.reply('Hello, world!');
};

// Auto-reading commands 
const commandModule = await import(`./${command}`); // Import by file name
    if (commandModule.default) { // Check for default export
      commandModule.default(message, args); // Invoke with parameters
    }
```
``

##### Data Storage
The bot uses TypeORM for data storage. By default, it is set up to use [SQLite](https://www.sqlite.org/). You can configure the database settings in src/data/index.ts.
Define functions and interfaces for working with your data in service/index.ts, or split it into multiple services if you have many entities.

##### Database Connection
The database connection is established in src/data/index.ts:

```typescript
import { createConnection } from 'typeorm';
import { User } from './User';

export const connectDatabase = async () => {
  await createConnection({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User],
    synchronize: true,
  });
};
```

##### Visual Functions
Visual functions, like creating embeds, are located in src/ui.

```typescript
import { EmbedBuilder } from 'discord.js';

export const createEmbed = (title: string, description: string) => {
  return new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor('#0099ff');
};
```

##### Local Development and Testing
###### Local Development
To develop locally, run the bot using ts-node:

```bash
npx ts-node src/bot.ts
## or 
npm run dev
```

###### Testing

For local testing, use a test Discord server. Invite your bot to this server using the OAuth2 URL generator on the [Discord Developer Portal](https://discord.com/developers/docs/intro).

###### Deployment

When deploying the bot to a production server, ensure you have the following:

* Environment variables set up correctly
* A process manager like [PM2](https://pm2.keymetrics.io/) to keep the bot running
* Logging and error handling mechanisms in place

#### Next Steps
* Add commands:
    * !hello: Replies with "Hello, world!"
    * !help: Lists all available commands.
    * !userinfo: Displays information about the user.
* Expand data set
* Improve error handling
* Deploy: Set up deployment scripts and a process manager

#### Contributing
Contributions are welcome! Please feel free to fork and open issues or PRs.

#### License
This project is licensed under the MIT License. See the LICENSE file for details.


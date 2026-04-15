import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { MarketingContextSchema } from './contextSchema.js';

const schema = zodToJsonSchema(MarketingContextSchema, 'MarketingContext');
const outPath = path.resolve(process.cwd(), 'src/schemas/marketing-context.schema.json');
await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(schema, null, 2)}\n`);
console.log(outPath);

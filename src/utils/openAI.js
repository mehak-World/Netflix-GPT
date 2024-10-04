import OpenAI from 'openai';
import { GPT_API_KEY, new_secret } from './constants';

const client = new OpenAI({
    apiKey:new_secret,
    dangerouslyAllowBrowser: true
  });

export default client;
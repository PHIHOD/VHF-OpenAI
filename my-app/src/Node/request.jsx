import contentText from "../Comp/dic";

const content = contentText;
const { Configuration, OpenAIApi } = require("openai");
const OPENAI_API_KEY = sk - lc8K4J7eteYvo0WWnZA5T3BlbkFJkFUKqd1ooO1ORO7lx0vd;
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion("text-davinci-002", {
  prompt: { content },
  temperature: 0.5,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Me:", " Automat Express:"],
});

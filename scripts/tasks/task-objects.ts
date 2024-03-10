type ChatMsg = {
  new (author: string, text: string, likes: number, dislikes: number): Object;
};

const ChatMsg = function (
  author: string,
  text: string,
  likes: number,
  dislikes: number,
) {
  this.author = author;
  this.text = text;
  this.likes = likes;
  this.dislikes = dislikes;
  this.editMsg = function () {
    prompt('Enter your message');
  };
} as unknown as ChatMsg;

const msg001 = new ChatMsg(
  'Viktor',
  'Lorem ipsum dolor sit amet consectetur adipisicing.',
  25,
  4,
);
const msg002 = new ChatMsg(
  'U3erKa',
  'Fugiat error quidem deleniti ab similique!',
  999,
  1,
);

export {};

import prisma from "../prisma/prismaClient.js";

function Controller() {
  const getMessages = async (req, res, next) => {
    const messages = await prisma.messages.findMany();
    res.render("index", { title: "Mini Message Board", messages: messages });
  };

  const getNewMessage = (req, res, next) => {
    res.render("form", { title: "MMB | New Message" });
  };

  const postNewMessage = async (req, res, next) => {
    const { user, text } = req.body;
    await prisma.messages.create({
      data: {
        username: user,
        text: text,
      },
    });
    res.redirect("/");
  };

  const getMessageById = async (req, res, next) => {
    const id = req.params.id;
    const message = await prisma.messages.findUnique({
      where: { id: parseInt(id) },
    });
    res.render("message_detail", {
      title: `MMB | Message Details`,
      message,
    });
  };
  return {
    getMessages,
    getNewMessage,
    postNewMessage,
    getMessageById,
  };
}

const rootController = new Controller();

export default rootController;

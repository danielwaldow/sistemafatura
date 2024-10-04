import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { Router, Request, Response } from 'express';
import { Contact } from './contact.entity';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const contacts: Contact[] = [
  {
    id: 1,
    name: 'Joao da Silva',
    email: 'joao@gmail.com',
    phone: '1234567890',
  },
  {
    id: 2,
    name: 'Jane Oliveira',
    email: 'jane@bmail.com',
    phone: '0987654321',
  },
];

app.get('/', (req: Request, res: Response) => {
  res.send(contacts);
});

app.post('/', (req: Request, res: Response) => {
  const contact: Contact = req.body;
  contact.id = Math.floor(Math.random() * 1000);
  contacts.push(contact);
  res.status(201).send(contact);
});

app.get('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const contact: Contact|undefined = contacts.find((contact) => contact.id === id);
  if (contact) {
    res.send(contact);
  } else {
    res.sendStatus(404);
  }
});

app.put('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const contact: Contact|undefined = contacts.find((contact) => contact.id === id);
  if (contact) {
    const newContact: Contact = req.body;
    newContact.id = id;
    const index: number = contacts.indexOf(contact);
    contacts[index] = newContact;
    res.send(newContact);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const index: number = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    res.sendStatus(404);
  } else {
    contacts.splice(index, 1);
    res.sendStatus(204);
  }
});

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

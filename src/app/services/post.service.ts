import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Primeiro Post',
      description: 'Essa é a descrição do primeiro post.',
      content: 'Esse é o conteudo do primeiro post.',
      imageUrl:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_400/https://www.kron.digital/wp-content/uploads/2023/06/tecnologia-de-fundo-de-toque-humano-remake-moderno-de-a-criacao-de-adam-600x400.jpg',
    },
    {
      id: 2,
      title: 'Segundo Post',
      description: 'Essa é a descrição do segundo post.',
      content: 'Esse é o conteudo do segundo post.',
      imageUrl:
        'https://www.accesscorp.com/wp-content/uploads/2022/01/Tecnologias-para-o-RH-saiba-por-que-voce%CC%82-deve-adicionar-a-gesta%CC%83o-de-documentos-600x400.jpg',
    },
    {
      id: 3,
      title: 'Terceiro Post',
      description: 'Essa é a descrição do terceiro post.',
      content: 'Esse é o conteudo do terceiro post.',
      imageUrl:
        'https://st3.depositphotos.com/1144687/18360/i/450/depositphotos_183608990-stock-photo-idea-and-technology-concept.jpg',
    },
  ];

  constructor() {}

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find((post) => post.id === id);
  }
}

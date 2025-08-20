import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../apiConfig'; // Importa a URL da nossa API

// Definimos um tipo para o objeto de Post para ajudar o TypeScript
interface Post {
  id: number;
  title: string;
  summary: string;
  author: string;
  createdAt: string;
  imageUrl?: string; // O campo da imagem é opcional
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/posts`);
        if (!response.ok) {
          throw new Error('Falha ao buscar os posts.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="text-center py-40">Carregando posts...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nosso Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Artigos e dicas para manter a saúde financeira do seu negócio.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  {/* Bloco para exibir a imagem, se ela existir */}
                  {post.imageUrl && (
                    <Link to={`/blog/${post.id}`} className="block relative w-full h-48 mb-6 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={`${API_URL}${post.imageUrl}`} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  )}
                  <div className="max-w-xl">
                    <div className="group relative">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to={`/blog/${post.id}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.summary}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-gray-600">
                          {new Date(post.createdAt).toLocaleDateString('pt-BR', {
                            day: '2-digit', month: 'long', year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">Nenhum post encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
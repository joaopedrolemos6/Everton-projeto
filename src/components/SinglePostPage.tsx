import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL } from '../apiConfig';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl?: string; // O campo da imagem é opcional
}

const SinglePostPage = () => {
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}/api/posts/${postId}`);
                if (!response.ok) {
                    throw new Error('Post não encontrado.');
                }
                const data = await response.json();
                setPost(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (postId) {
            fetchPost();
        }
        window.scrollTo(0, 0);
    }, [postId]);

    if (loading) {
        return <div className="text-center py-40">Carregando post...</div>;
    }

    if (error || !post) {
        return (
            <div className="text-center py-40">
                <h1 className="text-2xl font-bold text-red-500">Erro: {error || 'Post não encontrado!'}</h1>
                <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">Voltar para o Blog</Link>
            </div>
        );
    }

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                    Publicado em {new Date(post.createdAt).toLocaleDateString('pt-BR', {
                      day: '2-digit', month: 'long', year: 'numeric'
                    })} por {post.author}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
                
                {/* Adicionando a imagem de capa em destaque, se existir */}
                {post.imageUrl && (
                  <div className="relative w-full aspect-video my-8 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={`${API_URL}${post.imageUrl}`} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Usamos 'prose' do Tailwind para estilizar o HTML que vem do backend */}
                <div className="mt-10 prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    );
};

export default SinglePostPage;
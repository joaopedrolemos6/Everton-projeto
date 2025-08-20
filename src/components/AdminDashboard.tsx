import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../apiConfig';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
}

const AdminDashboard = () => {
  // Estados para o formulário
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  
  // Estados para a lista de posts e mensagens
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState('');
  
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  // Efeito para buscar os posts existentes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Falha ao buscar posts", error);
      }
    };
    fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    // FormData é necessário para enviar arquivos
    const formData = new FormData();
    formData.append('title', title);
    formData.append('summary', summary);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`${API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          // Não definimos 'Content-Type', o navegador faz isso por nós com FormData
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Falha ao criar o post.');
      
      const newPost = await response.json();
      setPosts([newPost, ...posts]); // Adiciona o novo post à lista
      setMessage('Post criado com sucesso!');
      
      // Limpa o formulário
      setTitle('');
      setSummary('');
      setContent('');
      setImage(null);
      // Reseta o input de arquivo
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if(fileInput) fileInput.value = "";

    } catch (err: any) {
      setMessage(`Erro: ${err.message}`);
    }
  };

  const handleDelete = async (postId: number) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      try {
        const response = await fetch(`${API_URL}/api/posts/${postId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('Falha ao excluir o post.');

        // Remove o post da lista no frontend
        setPosts(posts.filter(post => post.id !== postId));
        alert('Post excluído com sucesso!');

      } catch (err: any) {
        alert(`Erro: ${err.message}`);
      }
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font.bold tracking-tight text-gray-900 sm:text-4xl">Painel Administrativo</h2>
        <button onClick={handleLogout} className="mt-4 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500">Sair</button>
      </div>
      
      {/* Formulário de Criação de Post */}
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <h3 className="text-xl font-semibold text-center mb-8">Criar Novo Post</h3>
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label>Título</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"/>
          </div>
          <div>
            <label>Resumo</label>
            <textarea value={summary} onChange={e => setSummary(e.target.value)} required rows={3} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"></textarea>
          </div>
          <div>
            <label>Imagem de Capa</label>
            <input type="file" id="image-upload" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"/>
          </div>
          <div>
            <label>Conteúdo (aceita HTML)</label>
            <textarea value={content} onChange={e => setContent(e.target.value)} required rows={10} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"></textarea>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-slate-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-700">Criar Post</button>
        </div>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </form>

      {/* Lista de Posts para Exclusão */}
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <h3 className="text-xl font-semibold text-center mb-8">Gerenciar Posts</h3>
        <ul className="divide-y divide-gray-200">
          {posts.map(post => (
            <li key={post.id} className="py-4 flex items-center justify-between">
              <span className="text-gray-900">{post.title}</span>
              <button onClick={() => handleDelete(post.id)} className="rounded-md bg-red-50 px-2.5 py-1.5 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-100">
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'danielarcanjo1',
    password: 'a1s2d3f4@11',
    database: 'imob',
    debug: true // Habilita logs de depuração
  });
  
  const insertData = (name, email,dateOfCapture,origin,campaign,product,enterprise,situation,qualifier,broker) => {
    const sql = 'INSERT INTO leads (name, email,dateOfCapture,origin,campaign,product,enterprise,situation,qualifier,broker) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
      }
      
      connection.query(sql, [name, email,dateOfCapture,origin,campaign,product,enterprise,situation,qualifier,broker], (err, results) => {
        connection.release(); // Liberando a conexão de volta para a pool
        
        if (err) {
          console.error('Erro ao executar o INSERT:', err);
          return;
        }
        
        console.log('Dados inseridos com sucesso! ID do novo registro:', results.insertId);
      });
    });
  };
  
  // Inserindo dados na tabela
  insertData('daniel arcanjo','danielarcanjo1@gmail.com','2024/05/03','loja','feirão','dracenas','engenharq','novo', 'mayra remigio','idvana');
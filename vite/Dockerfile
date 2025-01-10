# 使用官方 Node.js 镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 lock 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件到容器
COPY . .

# 暴露 Vite 默认端口 5173
EXPOSE 5173

# 运行 Vite 开发服务器
CMD ["npm", "run", "dev"]

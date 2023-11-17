// Layout component

import React from "react";
import "./Layout.css"; // Import your CSS file

const Layout = ({ children }) => {
  return (
    <>
      <header>
        {/* Content for common header */}
        <h1>Common Header</h1>
      </header>
      <div className="main-container">
        <div className="left-sidebar">
          {/* Content for left sidebar 1 */}
          <p>Sidebar 1</p>
        </div>

        <div className="left-sidebar">
          {/* Content for left sidebar 2 */}
          <p>Sidebar 2</p>
        </div>

        <div className="content">
          {/* Content for common content area */}
          {children}
        </div>

        <div className="right-sidebar">
          {/* Content for right sidebar 3 */}
          <p>Sidebar 3</p>
        </div>
      </div>
    </>
  );
};

export default Layout;

Layout.css
/* Layout.css */

.main-container {
  display: flex;
  gap: 20px;
}

header {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.left-sidebar,
.right-sidebar {
  width: 200px; /* Adjust the width as needed */
  background-color: #f0f0f0; /* Adjust the background color as needed */
  padding: 20px;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

//App.js
  <Layout>
        <h1>Test</h1>
  </Layout>

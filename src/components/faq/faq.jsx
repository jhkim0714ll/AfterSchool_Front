import useFaq from "../../Hooks/faq/faq";
import "./faq.css";

const FAQ = () => {
  const { posts } = useFaq();
  return (
    <div id="faq-page-container">
      <div>자주 묻는 질문</div>
      <div id="faq-field-container">
        <div id="faq-list-container">
          <div id="faq-title-container">
            <div className="faq-title-title">제목</div>
            <div className="faq-title-content">설명</div>
            <div className="faq-title-createdDate">생성날짜</div>
          </div>
          <div id="faq-content-container">
            {posts.map((post) => {
              return (
                <div className="">
                  <div className="">
                    <div className="faq-content-title">{post.title}</div>
                    <div className="faq-content-content">{post.content}</div>
                    <div className="faq-content-createdDate">
                      {post.createdDate}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

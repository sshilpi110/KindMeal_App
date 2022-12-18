import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArticleHeader,
  Ahedd,
  Apara,
  APara,
  MainDiv,
  AButton,
  Video,
  Phedd,
} from "../components/Styled";

const Article = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/articles/${id}`);
        let data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ArticleHeader>
        <Ahedd>Yummy News, Articles & Videos</Ahedd>
        <Apara>
          Want to keep updated on the latest news of delicious meat-free meals
          and adorable animals? Check out this section for interesting daily
          happenings and articles that will melt your tummy (and heart too).
        </Apara>
        <Apara>
          {" "}
          You can also follow our Facebook Page or Twitter for more news and
          updates.
        </Apara>
      </ArticleHeader>

      <MainDiv>
        <div>
          <Video
            src="https://video.fccu16-1.fna.fbcdn.net/v/t39.25447-2/278842837_5072254779510620_6841115702661284160_n.mp4?_nc_cat=106&vs=c25fd785d6012622&_nc_vs=HBksFQAYJEdOWE5uaEJjejFkWU1BVVNBRUFCZVZ4OGh2QmVibWRqQUFBRhUAAsgBABUAGCRHSTlncEJDRDRwT2NkMlVCQURCM042UGM0Q0ZCYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmkNrNycu5rwcVkE4oAkMzGAt2dHNfcHJldmlldxwXQEeqn752yLQYIGRhc2hfdjRfNXNlY2dvcF9ocTFfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGw%2BIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfc2QTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQpzZF91bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQHMTk3NjkxORFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzMwODg1MDUwODA3OTI4NRJvZW1fdmlkZW9fYXNzZXRfaWQPMzM3Mjc1Mjk0OTczMDUzFW9lbV92aWRlb19yZXNvdXJjZV9pZBAyMDc0NjY4MzI2MDQxMjI0HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNTI0NTE2MTY1OTkxMzMxDnZ0c19yZXF1ZXN0X2lkD2JhNWVjNmYxOGE2ZjRmOCUCHBwcFfDmFxsBVQACGwFVAAIcFQIAAAAWgLq3AwAlvgEbB4gBcwQ2NTQxAmNkCjIwMjItMDQtMjYDcmNiBzE5NzY5MDADYXBwBlZpZGVvcwJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MFNDcuMzYCdHMUcHJvZ3Jlc3NpdmVfb3JkZXJpbmcA&ccb=1-6&_nc_sid=edb743&_nc_ohc=2LSejNnF9XoAX_RHBfb&_nc_ht=video.fccu16-1.fna&edm=AGo2L-IEAAAA&oh=00_AT8wfMcB54T1zBW_qAaTMrC2b0GpNTOU_etH6gOmI289NQ&oe=627D6173&_nc_rid=237030426119302"
            frameborder="0"
          ></Video>
        </div>

        <Phedd>{data.title}</Phedd>
        <br />
        <APara>{data.by}</APara>

        <Apara>{data.para}</Apara>
        <br />
        <AButton
          onClick={() => navigate("/articles")}
          style={{ width: "200px" }}
        >
          « Back To Articles
        </AButton>
      </MainDiv>
      <br />
      <br />
      <br />
    </>
  );
};

export default Article;

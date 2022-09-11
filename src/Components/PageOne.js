import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>
          What "HTTPS" means? Hyper Text Transfer Protocol, is an internet
          protocol that aims to carry out the communication of devices with
          servers around the world.
        </S.H2>
        <S.H2>Stateless is...? request-response</S.H2>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <li>
          indicate who performs an action or who is described by the main verb
          of the sentence.
        </li>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <li>auxiliay verbs</li>
        <S.H2>What Should means?</S.H2>
        <li>modal verb</li>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <li>Let's say great things about you! </li>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <li>He goes to Bahia next month </li>
          <li>3 - Ela estará ai amanhã</li>
          <li>she will be there tomorrow </li>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <li> gime</li>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <li>i was, you were, he was, we were, you were, they were</li>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <li>These houses are old.</li>
        <li>These bottles are empty.</li>
        <li>Those factories opened yesterday</li>
        <li>Whose books are those?</li>
      </S.Box>
    </S.Container>
  );
}

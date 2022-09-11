import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <li>do, does, doing, did,done</li>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <li>“have” implies the meaning of possession </li>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <li>i'm have a joy listening to music morning</li>
        <li>the prayer is a joy for me</li>
        <li>sadness not will last forever</li>
        <li>the lack of communication is a sadness</li>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
          <li>
            Will is used when referring to the future with certainty and for
            recent, rapid decisions.
          </li>
          <li>
            {" "}
            Going to is used to refer to events that have been previously
            planned.
          </li>
        </S.H2>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <li>who,whom,whose,what.</li>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <li>eventualy,barely,simply,outside</li>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <li>I'll tidy up my room tomorrow.</li>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <li>There is a separate mouse</li>
      </S.Box>
    </S.Container>
  );
}

import { useCallback, useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";
import { useToast } from "../../hooks/toast";

import api from "../../services/api";
import { ICardsData } from "../Home";
import {
  Container,
  Display,
  OptionsContainer,
  AnswerContainer,
} from "./styles";

interface IParams {
  list_id: string;
}

export default function StudyCardsPage() {
  const { list_id } = useParams<IParams>();

  const { showToast } = useToast()

  const [cards, setCards] = useState<ICardsData[]>([]);
  const [indexCard, setIndexCard] = useState(0);

  const handleAnswer = useCallback((answer: string) => {
    if (cards[indexCard]?.versus === answer) {
      const index = Math.floor(Math.random() * cards.length);
      if (index !== indexCard) {
        setIndexCard(index)
      } else {
        setIndexCard(Math.floor(Math.random() * cards.length))
      }
    } else showToast({
      type: "error",
      message: "Tente novamente",
      timer: 1200
    })
  }, [indexCard, cards, showToast])

  const incorretOptions = useMemo(() => {
    const filterOptions = cards.filter((curr, index) => index !== indexCard);

    for (let index = filterOptions.length; index; index--) {
      const randomIndex = Math.floor(Math.random() * index);

      const element = filterOptions[index - 1];

      filterOptions[index - 1] = filterOptions[randomIndex];

      filterOptions[randomIndex] = element;
    }

    if (filterOptions.length <= 2) return filterOptions;

    return filterOptions.slice(0, 3);
  }, [cards, indexCard]);

  const allOptions = useMemo(() => {
    const options = [...incorretOptions, cards[indexCard]];

    for (let index = options.length; index; index--) {
      const randomIndex = Math.floor(Math.random() * index);

      const element = options[index - 1];

      options[index - 1] = options[randomIndex];

      options[randomIndex] = element;
    }

    return options;
  }, [cards, indexCard, incorretOptions]);

  useEffect(() => {
    api
      .get(`/cards/list/${list_id}`)
      .then((response) => setCards(response.data));
  }, [list_id]);

  return (
    <Container>
      <Display>
        <p>{cards[indexCard]?.front}</p>
      </Display>

      <OptionsContainer>
        {allOptions.map((curr) => (
          <AnswerContainer onClick={() => handleAnswer(curr.versus)} >
            <p>{curr?.versus}</p>
          </AnswerContainer>
        ))}
      </OptionsContainer>
    </Container>
  );
}

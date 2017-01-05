# RackPd

Environnement de traitement sonore temps réel dans pure data.

Ce projet se présente sous la forme d'un rack d'effets et d'instruments pouvant être reconfigurés à la volée, en situation de performance. Un système de présets permet de mémoriser chaque configuration et de passer facilement et sans coupure de son d'une configuration à la suivante.

Ecrit en PureData, il s'inspire de projet comme DIY2 (Matt Davey, aka  hard.off) et ArgoPd (Gérard Paresys) en ce qu'il propose des modules de traitement/synthèse sonore avec interface graphique utilisateur intégrée, donc avec un niveau d'abstraction et d'accessibilité plus élevé par rapport aux objets de base de puredata. De plus, la disposition de ces modules en rack permet d'éviter le câblage de « fils » à effectuer à la souris, ce qui est le paradigme habituel des environnements modulaires (max msp, puredata, reaktor, audiomulch, etc...). Dans le cas présent, cela permet d'envisager une utilisation avec écran tactile.

RackPd et ses modules sont construits sur la bibliothèque d'abstractions rjdj, quasi-exclusivement en PureData vanilia, ce qui permet d'envisager une utilisation sur appareils mobiles (android, iOs) via l'application MobMuPlat.
Ce choix permet aussi de simplifier l'écriture de nouveaux modules par les utilisateurs, d'autant plus que le projet a vocation à être un outil pédagogique : découverte et application de la lib rjdj, étude des questions d'interfaçage et de mapping, confrontation aux problématiques de la lutherie électronique.

RackPd n'a pas l'ambition d'égaler des environnements sophistiqués comme Usine (Sensomusic), Live (Ableton), Reaper ou autres DAWs, ou même Caustic (Singlecell software), mais est une proposition pour utiliser puredata en live d'une manière légère et réactive. 

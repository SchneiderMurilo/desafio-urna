import {Component} from '@angular/core';
import { federalDeputies, stateDeputies, senators, governors, presidents } from '../candidates/candidates';
import { UrnaService } from '../services/urna.service';
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, NgStyle, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  voteRegistration = {
    urna: 0,
    federalDeputy: { number: '', candidate: '', party: '', nullOrWhite: '' },
    stateDeputy: { number: '', candidate: '', party: '', nullOrWhite: '' },
    senator: { number: '', candidate: '', party: '', nullOrWhite: '' },
    governor: { number: '', candidate: '', party: '', nullOrWhite: '' },
    president: { number: '', candidate: '', party: '', nullOrWhite: '' }}
  step = 1;
  confirmVote = false;
  candidateName : string = '';
  party : string = '';
  candidateImage : string = '';
  viceCandidateImage : string = '';
  firstSubstituteImage : string = '';
  secondSubstituteImage : string = '';
  firstSubstitute : string = '';
  secondSubstitute : string = '';
  viceGovernor : string = '';
  vicePresident : string = '';
  federalDeputyVote : string = '';
  federalDeputyVoteWhite : boolean = false;
  federalDeputyVoteNull : boolean = false;
  stateDeputyVote : string = '';
  stateDeputyVoteWhite : boolean = false;
  stateDeputyVoteNull : boolean = false;
  senatorVote : string = '';
  senatorVoteWhite : boolean = false;
  senatorVoteNull : boolean = false;
  governorVote : string = '';
  governorVoteWhite : boolean = false;
  governorVoteNull : boolean = false;
  presidentVote : string = '';
  presidentVoteWhite : boolean = false;
  presidentVoteNull : boolean = false;

  constructor(private urnaService: UrnaService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const urnaId = this.route.snapshot.paramMap.get('urnaId');
    if (urnaId) {
      this.voteRegistration.urna = +urnaId;
    }
  }

  async playConfirmAudio() {
      let audio = new Audio();
      audio.src = '../../assets/urna/confirm.wav';
      audio.load();
      await audio.play();
  }

  async playClickAudio() {
    let audio = new Audio();
    audio.src = '../../assets/urna/click.wav';
    audio.load();
    await audio.play();
  }

  playFinishAudio() {
    let audio = new Audio();
    audio.src = '../../assets/urna/finish.wav';
    audio.load();
    audio.play();
  }

  changeConfirmVote() {
    this.confirmVote = true;
    setTimeout(() => {this.confirmVote = false}, 1000);
  }

  finishVote() {

    setTimeout(() => {
      this.step = 7
      this.playFinishAudio();
    }, 2800);
  }

  findCandidate() {
    if (this.step === 1 && this.federalDeputyVote.length >= 4) {
      let candidate = federalDeputies.find((e) => e.number === Number(this.federalDeputyVote))
      if (candidate) {
        this.candidateName = candidate.name;
        this.party = candidate.party;
        this.candidateImage = candidate.image;
        this.changeConfirmVote()
      } else {
        this.federalDeputyVoteNull = true;
      }
    } else if (this.step === 2 && this.stateDeputyVote.length >= 5) {
      let candidate = stateDeputies.find((e) => e.number === Number(this.stateDeputyVote))
      if (candidate) {
        this.candidateName = candidate.name;
        this.party = candidate.party;
        this.candidateImage = candidate.image;
        this.changeConfirmVote()
      } else {
        this.stateDeputyVoteNull = true;
      }
    } else if (this.step === 3 && this.senatorVote.length >= 3) {
      let candidate = senators.find((e) => e.number === Number(this.senatorVote))
      if (candidate) {
        this.candidateName = candidate.name;
        this.party = candidate.party;
        this.firstSubstitute = candidate.substitutes ? candidate.substitutes[0].name : '';
        this.secondSubstitute = candidate.substitutes ? candidate.substitutes[1].name : '';
        this.candidateImage = candidate.image;
        this.firstSubstituteImage = candidate.substitutes ? candidate.substitutes[0].image : '';
        this.secondSubstituteImage = candidate.substitutes ? candidate.substitutes[1].image : '';
        this.changeConfirmVote()
      } else {
        this.senatorVoteNull = true;
      }
    } else if (this.step === 4 && this.governorVote.length >= 2) {
      let candidate = governors.find((e) => e.number === Number(this.governorVote))
      if (candidate) {
        this.candidateName = candidate.name;
        this.party = candidate.party;
        this.viceGovernor = candidate.vice ? candidate.vice.name : '';
        this.candidateImage = candidate.image;
        this.viceCandidateImage = candidate.vice ? candidate.vice.image : '';
        this.changeConfirmVote()
      } else {
        this.governorVoteNull = true;
      }
    } else if (this.step === 5 && this.presidentVote.length >= 2) {
      let candidate = presidents.find((e) => e.number === Number(this.presidentVote))
      if (candidate) {
        this.candidateName = candidate.name;
        this.party = candidate.party;
        this.vicePresident = candidate.vice ? candidate.vice.name : '';
        this.candidateImage = candidate.image;
        this.viceCandidateImage = candidate.vice ? candidate.vice.image : '';
        this.changeConfirmVote()
      } else {
        this.presidentVoteNull = true;
      }
    }
  }

  digit(digit: number) {
    this.playClickAudio();
    if (this.step === 1 && this.federalDeputyVote.length < 4 && !this.federalDeputyVoteWhite) {
      this.federalDeputyVote += digit;
    } else if (this.step === 2 && this.stateDeputyVote.length < 5 && !this.stateDeputyVoteWhite) {
      this.stateDeputyVote += digit;
    } else if (this.step === 3 && this.senatorVote.length < 3 && !this.senatorVoteWhite) {
      this.senatorVote += digit;
    } else if (this.step === 4 && this.governorVote.length < 2 && !this.governorVoteWhite) {
      this.governorVote += digit;
    } else if (this.step === 5 && this.presidentVote.length < 2 && !this.presidentVoteWhite) {
      this.presidentVote += digit;
    }

    this.findCandidate();
  }

  clear() {

    this.playClickAudio();
    this.candidateImage = '';
    this.viceCandidateImage = '';
    this.firstSubstituteImage = '';
    this.secondSubstituteImage = '';

    if (this.step === 1) {
      this.federalDeputyVote = '';
      this.candidateName = '';
      this.party = '';
      this.federalDeputyVoteNull = false;
      this.federalDeputyVoteWhite = false;
    } else if (this.step === 2) {
      this.stateDeputyVote = '';
      this.candidateName = '';
      this.party = '';
      this.stateDeputyVoteNull = false;
      this.stateDeputyVoteWhite = false;
    } else if (this.step === 3) {
      this.senatorVote = '';
      this.candidateName = '';
      this.party = '';
      this.senatorVoteWhite = false;
      this.senatorVoteNull = false;
      this.firstSubstitute = '';
      this.secondSubstitute = '';
    } else if (this.step === 4) {
      this.governorVote = '';
      this.candidateName = '';
      this.party = '';
      this.governorVoteNull = false;
      this.governorVoteWhite = false;
      this.viceGovernor = '';
    } else if (this.step === 5) {
      this.presidentVote = '';
      this.candidateName = '';
      this.party = '';
      this.presidentVoteNull = false;
      this.presidentVoteWhite = false;
      this.vicePresident = '';
    }
  }

  whiteVote() {

    this.playClickAudio();
    this.candidateImage = '';
    this.viceCandidateImage = '';
    this.firstSubstituteImage = '';
    this.secondSubstituteImage = '';

    if (this.step === 1) {
      this.federalDeputyVoteWhite = true;
      this.federalDeputyVote = '';
      this.candidateName = '';
      this.party = '';
      this.federalDeputyVoteNull = false;
    } else if (this.step === 2) {
      this.stateDeputyVoteWhite = true;
      this.stateDeputyVote = '';
      this.candidateName = '';
      this.party = '';
      this.stateDeputyVoteNull = false;
    } else if (this.step === 3) {
      this.senatorVoteWhite = true;
      this.senatorVote = '';
      this.candidateName = '';
      this.party = '';
      this.firstSubstitute = '';
      this.secondSubstitute = '';
      this.senatorVoteNull = false;
    } else if (this.step === 4) {
      this.governorVoteWhite = true;
      this.governorVote = '';
      this.candidateName = '';
      this.party = '';
      this.governorVoteNull = false;
      this.viceGovernor = '';
    } else if (this.step === 5) {
      this.presidentVoteWhite = true;
      this.presidentVote = '';
      this.candidateName = '';
      this.party = '';
      this.presidentVoteNull = false;
      this.vicePresident = '';
    }

    this.changeConfirmVote()
  }

  sendVote() {
    this.urnaService.sendVote(this.voteRegistration).subscribe(
      (response) => {
        console.log(response);
        this.step = 6;
        this.finishVote();
      },
      (error) => {
        console.error(error);
        localStorage.removeItem('jwt_token')
        this.router.navigate(['/login']);
      }
    );
  }

  redirectToRelatorio() {
    window.location.href = `http://localhost:8000/relatorio/urna/${this.voteRegistration.urna}`;
  }

  logout () {
      localStorage.removeItem('jwt_token')
      this.router.navigate(['/login']);
  }

  nextStep() {
    if (this.step === 1 && this.candidateName !== '' ||
      this.step === 1 && this.federalDeputyVoteWhite ||
      this.step === 1 && this.federalDeputyVoteNull) {

      this.playConfirmAudio()
      this.voteRegistration.federalDeputy.number = this.federalDeputyVote;
      this.voteRegistration.federalDeputy.candidate = this.candidateName;
      this.voteRegistration.federalDeputy.party = this.party;
      this.voteRegistration.federalDeputy.nullOrWhite = this.federalDeputyVoteNull ? 'Nulo' : this.federalDeputyVoteWhite ? 'Branco' : '';

      this.step = 2;
      this.candidateName = '';
      this.party = '';
      this.candidateImage = '';
      this.confirmVote = false;

    }
    if (this.step === 2 && this.candidateName !== '' ||
      this.step === 2 && this.stateDeputyVoteWhite ||
      this.step === 2 && this.stateDeputyVoteNull) {

      this.playConfirmAudio();
      this.voteRegistration.stateDeputy.number = this.stateDeputyVote;
      this.voteRegistration.stateDeputy.candidate = this.candidateName;
      this.voteRegistration.stateDeputy.party = this.party;
      this.voteRegistration.stateDeputy.nullOrWhite = this.stateDeputyVoteNull ? 'Nulo' : this.stateDeputyVoteWhite ? 'Branco' : '';

      this.step = 3;
      this.candidateName = '';
      this.party = '';
      this.candidateImage = '';
      this.confirmVote = false;

    }
    if (this.step === 3 && this.candidateName !== '' ||
      this.step === 3 && this.senatorVoteWhite ||
      this.step === 3 && this.senatorVoteNull) {

      this.playConfirmAudio();
      this.voteRegistration.senator.number = this.senatorVote;
      this.voteRegistration.senator.candidate = this.candidateName;
      this.voteRegistration.senator.party = this.party;
      this.voteRegistration.senator.nullOrWhite = this.senatorVoteNull ? 'Nulo' : this.senatorVoteWhite ? 'Branco' : '';

      this.step = 4;
      this.candidateName = '';
      this.party = '';
      this.candidateImage = '';
      this.firstSubstituteImage = '';
      this.secondSubstituteImage = '';
      this.firstSubstitute = '';
      this.secondSubstitute = '';
      this.confirmVote = false;
    }
    if (this.step === 4 && this.candidateName !== '' ||
      this.step === 4 && this.governorVoteWhite ||
      this.step === 4 && this.governorVoteNull) {

      this.playConfirmAudio();
      this.voteRegistration.governor.number = this.governorVote;
      this.voteRegistration.governor.candidate = this.candidateName;
      this.voteRegistration.governor.party = this.party;
      this.voteRegistration.governor.nullOrWhite = this.governorVoteNull ? 'Nulo' : this.governorVoteWhite ? 'Branco' : '';

      this.candidateName = '';
      this.party = '';
      this.candidateImage = '';
      this.viceGovernor = '';
      this.viceCandidateImage = '';
      this.confirmVote = false;
      this.step = 5;

    }
    if (this.step === 5 && this.candidateName !== '' ||
      this.step === 5 && this.presidentVoteWhite ||
      this.step === 5 && this.presidentVoteNull) {

      this.playConfirmAudio();
      this.voteRegistration.president.number = this.presidentVote;
      this.voteRegistration.president.candidate = this.candidateName;
      this.voteRegistration.president.party = this.party;
      this.voteRegistration.president.nullOrWhite = this.presidentVoteNull ? 'Nulo' : this.presidentVoteWhite ? 'Branco' : '';

      this.candidateName = '';
      this.party = '';
      this.vicePresident = '';
      this.confirmVote = false;
      this.candidateImage = '';
      this.viceCandidateImage = '';
      this.step = 0;

      this.sendVote()
    }
  }

  reset() {
    this.voteRegistration = {
      urna: this.voteRegistration.urna,
      federalDeputy: { number: '', candidate: '', party: '', nullOrWhite: '' },
      stateDeputy: { number: '', candidate: '', party: '', nullOrWhite: '' },
      senator: { number: '', candidate: '', party: '', nullOrWhite: '' },
      governor: { number: '', candidate: '', party: '', nullOrWhite: '' },
      president: { number: '', candidate: '', party: '', nullOrWhite: '' },
    };

    this.step = 1;
    this.confirmVote = false;
    this.candidateName = '';
    this.party = '';
    this.candidateImage = '';
    this.viceCandidateImage = '';
    this.firstSubstituteImage = '';
    this.secondSubstituteImage = '';
    this.firstSubstitute = '';
    this.secondSubstitute = '';
    this.viceGovernor = '';
    this.vicePresident = '';

    this.federalDeputyVote = '';
    this.federalDeputyVoteWhite = false;
    this.federalDeputyVoteNull = false;

    this.stateDeputyVote = '';
    this.stateDeputyVoteWhite = false;
    this.stateDeputyVoteNull = false;

    this.senatorVote = '';
    this.senatorVoteWhite = false;
    this.senatorVoteNull = false;

    this.governorVote = '';
    this.governorVoteWhite = false;
    this.governorVoteNull = false;

    this.presidentVote = '';
    this.presidentVoteWhite = false;
    this.presidentVoteNull = false;
  }
}

function NaiveBayes(NamaSaham) {
  const saham = 'data.json';

  //status = naik/turun saham

  function sumTrue() {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.status === 1) {
        t += 1;
      }
    }
    return t;
  }

  function sumFalse() {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.status === 0) {
        t += 1;
      }
    }
    return t;
  }

  function sumData() {
    const data = require(saham);
    return data.length;
  }

  //perhitungan probabilitas variabel

  function probUmur(umur, status) {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.umur === umur && hasil.status === status) {
        t += 1;
      } else if (hasil.umur === umur && hasil.status === status) {
        t += 1;
      }
    }
    return t;
  }

  function probTinggi(tinggi, status) {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.tinggi === tinggi && hasil.status === status) {
        t += 1;
      } else if (hasil.tinggi === tinggi && hasil.status === status) {
        t += 1;
      }
    }
    return t;
  }

  function probBeratB(bb, status) {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.berat_badan === bb && hasil.status === status) {
        t += 1;
      } else if (hasil.berat_badan === bb && hasil.status === status) {
        t += 1;
      }
    }
    return t;
  }

  function probPendidikan(pendidikan, status) {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.pendidikan === pendidikan && hasil.status === status) {
        t += 1;
      } else if (hasil.pendidikan === pendidikan && hasil.status === status) {
        t += 1;
      }
    }
    return t;
  }

  function probKesehatan(kesehatan, status) {
    const data = require(saham);
    let t = 0;
    for (const hasil of data) {
      if (hasil.kesehatan === kesehatan && hasil.status === status) {
        t += 1;
      } else if (hasil.kesehatan === kesehatan && hasil.status === status) {
        t += 1;
      }
    }
    return t;
  }

  function hasilTrue(sT = 0, sD = 0, pU = 0, pT = 0, pBB = 0, pK = 0, pP = 0) {
    const paTrue = sT / sD;
    const p1 = pU / sT;
    const p2 = pT / sT;
    const p3 = pBB / sT;
    const p4 = pK / sT;
    const p5 = pP / sT;
    const hsl = paTrue * p1 * p2 * p3 * p4 * p5;
    return hsl;
  }

  function hasilFalse(sF = 0, sD = 0, pU = 0, pT = 0, pBB = 0, pK = 0, pP = 0) {
    const paFalse = sF / sD;
    const p1 = pU / sF;
    const p2 = pT / sF;
    const p3 = pBB / sF;
    const p4 = pK / sF;
    const p5 = pP / sF;
    const hsl = paFalse * p1 * p2 * p3 * p4 * p5;
    return hsl;
  }

  function perbandingan(pATrue, pAFalse) {
    let stt, hitung, diterima;
    if (pATrue > pAFalse) {
      stt = 'DITERIMA';
      hitung = (pATrue / (pATrue + pAFalse)) * 100;
      diterima = 100 - hitung;
    } else if (pAFalse > pATrue) {
      stt = 'DITOLAK';
      hitung = (pAFalse / (pAFalse + pATrue)) * 100;
      diterima = 100 - hitung;
    }
    const hsl = [stt, hitung, diterima];
    return hsl;
  }

  return {
    sumTrue,
    sumFalse,
    sumData,
    probUmur,
    probTinggi,
    probBeratB,
    probPendidikan,
    probKesehatan,
    hasilTrue,
    hasilFalse,
    perbandingan,
  };
}

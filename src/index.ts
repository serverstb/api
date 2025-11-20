export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    let data;

    if (path === '/pendidikan') {
      data = [
        { id: 1, jenjang: 'SD', nama: 'SDN 1' },
        { id: 2, jenjang: 'SMP', nama: 'SMPN 1' },
        { id: 3, jenjang: 'SMA', nama: 'SMAN 1' },
      ];
    } else if (path === '/sosial') {
      data = [
        { id: 1, kegiatan: 'Bakti Sosial', tanggal: '2024-01-01' },
        { id: 2, kegiatan: 'Gotong Royong', tanggal: '2024-02-02' },
      ];
    } else if (path === '/keuangan') {
      data = {
        pemasukan: 1000000,
        pengeluaran: 500000,
        saldo: 500000,
      };
    } else if (path === '/hukum') {
      data = [
        { id: 1, kasus: "Pencurian", status: "Selesai" },
        { id: 2, kasus: "Penipuan", status: "Dalam Proses" }
      ];
    } else {
      data = {
        message: 'This is a web service API.',
        endpoints: ['/pendidikan', '/sosial', '/keuangan', '/hukum'],
        timestamp: new Date().toISOString(),
      };
    }

    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
    });
  },
} satisfies ExportedHandler<Env>;
